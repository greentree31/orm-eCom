const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");


router.get('/', (req, res) => {
  Category.findAll().then((categories) => {res.json(Product);
  });
});

router.get('/:id', (req, res) => {
  try {
    const Category = await Category.findByPk(req.params.id);
    if (!categoriesData) {
      res.status(404).json({ message: 'ID not found!'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
}); 

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});


router.put('/:id', (req, res) => {
  try {
    const categoriesData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoriesData[0]) {
      res.status(404).json({ message: 'ID not found!' });
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const categoriesData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoriesData) {
      res.status(404).json({ message: 'ID not found!'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
