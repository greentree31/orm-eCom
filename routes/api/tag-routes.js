const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// find all tags
router.get('/', (req, res) => {
  Tag.findAll().then((tags) => {res.json(Product);
  });
});

// find tag by ID
router.get('/:id', async (req, res) => {
  try {
    const Tag = await Tag.findByPk(req.params.id);
    if (!tagData) {
      res.status(404).json({ message: 'ID not found!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creating a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

//update tag by ID
router.put('/:id', (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({ message: 'ID not found!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'ID not found!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
