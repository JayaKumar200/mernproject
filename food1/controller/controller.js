require('dotenv').config()
const express = require('express');
const Model = require('../model/fetch.js'); 
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')
const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const existEmail = await Model.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new Model({ username:userName, email, password:hashPassword });
        await newUser.save();

        res.status(200).json({ message: 'Data is saved' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.log(err);
    }
};


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Model.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

         const token = jwt.sign(
            { id: user._id, email: user.email }, 
            process.env.SECRET_KEY,             
            { expiresIn: '1h' }           
        );

        res.status(200).json({ 
            message: 'User is valid',
            user: {
            username: user.username,
            email: user.email,
            token:token
        } 
         });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.log(err);
    }
};

const userProduct = async (req, res) => {
    try {
        const { productEmail, item } = req.body;

        const existProductEmail = await Model.findOne({ email: productEmail });
        
        if (!existProductEmail) {
            return res.status(400).json({ message: 'Email not found' });
        }

        existProductEmail.products.push(item);
        await existProductEmail.save();

        res.status(200).json({
         message: 'Product added successfully',
         products:existProductEmail.products 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });

    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const { productEmail } = req.body;

        if (!productEmail) {
            return res.status(400).json({ message: 'Email and Product ID are required' });
        }

        const existingUser = await Model.findOne({ email: productEmail });

        if (!existingUser) {
            return res.status(400).json({ message: 'Email not found' });
        }

        const result = await Model.updateOne(
            { email: productEmail },
            { $pull: { products: { _id: id } } }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Product not found or already deleted' });
        }

        const productToDelete = existingUser.products.find(product => product._id.toString() === id);

            if (!productToDelete) {
                return res.status(404).json({ message: 'Product not found' });
            }


        res.status(200).json({ 
            message: 'Product deleted successfully' ,
            name:productToDelete.name
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { signUp ,userLogin,userProduct,deleteProduct};
