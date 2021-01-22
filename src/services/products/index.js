const express = require("express");
const Products = require("../../database").Products; //BECAUSE DATABASE/INDEX.JS IS EXPORTING A MODELS OBJECT, WE CAN CALL THE Article MODEL STRAIGHT FROM THIS OBJECT
const Review = require("../../database").Review;
const Category = require("../../database").Category;

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newProduct = await Products.create(req.body); //.create IS A SEQUELIZE METHOD DOR MODELS, IT CREATES A NEW ROW IN THE TABLE
        res.status(201).send(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Uh oh, something broke :(");
    }
});

router.get("/", async (req, res) => {
    try {
        const allProducts = await Products.findAll({
            include: [Review, Category],
        }); //.findAll RETURNS ALL OF THE ArticleS. include:[] IS AN ARRAY THAT CONNECTS MODELS WITH THE REQUEST. THIS IS DONE SO AUTHORID CAN GET THE CORRESPONDING AUTHOR OBJECT
        res.send(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).send("Uh oh, something broke :(");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const singleProduct = await Products.findByPk(req.params.id, {
            include: [Review, Category],
        }); //.findByPk RETURNS THE Article WITH THE MATCHING ID
        res.send(singleProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Uh oh, something broke :(");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } }); //.destroy DESTROYS ROWS. CAN DESTROY MULTIPLE BASED ON FILTER. WILL DESTRY ALL WITHOUT A FILTER
        res.send("product destroyed");
    } catch (error) {
        console.log(error);
        res.status(500).send("Uh oh, something broke :(");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const alteredProduct = await Product.update(req.body, {
            where: { id: req.params.id },
            include: [Review, Category],
            returning: true,
        });
        res.send(alteredProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Uh oh, something broke :(");
    }
});

module.exports = router;