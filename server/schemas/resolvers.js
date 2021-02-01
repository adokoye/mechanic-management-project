const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User, Repair, Part, Customer } = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    
    Query: {

        parts: async (parent, { name }) => {
            const params = {};
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Part.find(params).populate('part');
        },

        part: async (parent, { _id }) => {
            return await Product.findById(_id).populate('part');
        },
        
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'savedCustomers.repairs',
                populate: 'customer'
              });

              user.repairs.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },

        customer: async (parent, args, context) => {
            if (context.customer) {
              const customer = await Customer.findById(context.customer._id).populate({
                path: 'repairs.parts',
                populate: 'repair'
              });

              customer.repairs.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return customer;
            }
      
            throw new AuthenticationError('Not logged in');
        },

        repair: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'savedCustomers.repairs',
                populate: 'customer'
              });
      
              return user.repairs.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const repair = new Repair({ products: args.products });
            const { parts } = await repair.populate('parts').execPopulate();
      
            const line_items = [];
      
          for (let i = 0; i < parts.length; i++) {
            // generate product id
            const product = await stripe.products.create({
              name: parts[i].name,
              description: parts[i].description
            });
            // generate price id using the product id
            const price = await stripe.prices.create({
              product: product.id,
              unit_amount: parts[i].price * 100,
              currency: 'usd',
            });
      
            // add price id to the line items array
            line_items.push({
              price: price.id,
              quantity: 1
            });
        }
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`
          });
          return { session: session.id };
        }
    },

    Mutation: {
        
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        
        addCustomer: async (parent, args) => {
            const customer = await Customer.create(args);
            const token = signToken(customer);
      
            return { token, customer };
        },

        addRepair: async (parent, { parts }, context) => {
            console.log(context);
            if (context.user) {
              const repair = new Repair({ parts });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { repairs: repair } });
      
              return repair;
            }
      
            throw new AuthenticationError('Not logged in');
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },

        updateCustomer: async (parent, args, context) => {
            if (context.customer) {
              return await Customer.findByIdAndUpdate(context.customer._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },

        updatePart: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Part.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        },

        checkIn: async (parent, { cellPhone }) => {
            const customer = await Customer.findOne({ cellPhone });
      
            if (!customer) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPn = await (cellPhone);
      
            if (!correctPn) {
              throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(customer);
      
            return { token, customer };
        }
    }
};

module.exports = resolvers;