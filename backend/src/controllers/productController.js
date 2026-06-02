export const addProducts = async (req, res) => {
  console.log(req.body);
};

export const getAllProducts = (req, res) => {
  res.status(200).json({ message: "all product" });
};

export const getSingleProduct = (req, res) => {
  res.status(200).json({ message: "single product" });
};
