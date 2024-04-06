import { StatusCodes } from "http-status-codes";
import ProductModel from "../models/ProductModel.js";
export const getAllTransaction = async (req, res) => {
  // search functionality
  const { search, month = 3 } = req.query;
  const searchParam = search?.trim();
  let queryParams = { monthOfSale: Number(month) };
  if (search && !!searchParam && isNaN(Number(search))) {
    queryParams.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  } else if (search && !!searchParam && !isNaN(Number(search))) {
    queryParams = { price: Number(search) };
  }
  // pagination
  const totalProducts = await ProductModel.countDocuments({
    monthOfSale: Number(month),
  });
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;
  const allTransaction = await ProductModel.find(queryParams)
    .skip(skip)
    .limit(limit);
  const totalPage = search
    ? Math.ceil(allTransaction.length / limit)
    : Math.ceil(totalProducts / limit);

  res
    .status(StatusCodes.OK)
    .json({ transactions: allTransaction, totalPage, curPage: page });
};

const statistics = async (req, res) => {
  const month = Number(req.query.month) || 3;
  const soldProducts = await ProductModel.find({ monthOfSale: month });
  const sales = soldProducts.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const soldItem = soldProducts.reduce((acc, curr) => {
    if (!curr.sold) return acc;
    return acc + 1;
  }, 0);
  const unSoldItem = soldProducts.reduce((acc, curr) => {
    if (curr.sold) return acc;
    return acc + 1;
  }, 0);
  return {
    totalSales: sales,
    totalSoldItems: soldItem,
    totalUnsoldItems: unSoldItem,
  };
};
const itemsWithPriceRange = async (req, res) => {
  const priceRanges = [
    { min: 0, max: 100 },
    { min: 100, max: 200 },
    { min: 200, max: 300 },
    { min: 300, max: 400 },
    { min: 400, max: 500 },
    { min: 500, max: 600 },
    { min: 600, max: 700 },
    { min: 700, max: 800 },
    { min: 800, max: 900 },
    { min: 900, max: Infinity },
  ];

  const itemsAndPriceRange = await Promise.all(
    priceRanges.map(async (range) => {
      const items = await ProductModel.countDocuments({
        price: { $gte: range.min, $lt: range.max },
        monthOfSale: Number(req.query.month) || 3,
      });
      return {
        priceRange: `${range.min}-${
          range.max === Infinity ? "above" : range.max
        }`,
        items,
      };
    })
  );
  return itemsAndPriceRange;
};

export const categoryWiseItem = async (req, res) => {
  const categoryWiseItemCount = await ProductModel.aggregate([
    { $match: { monthOfSale: Number(req.query.month) || 3 } },
    { $group: { _id: "$category", items: { $sum: 1 } } },
  ]);
  return categoryWiseItemCount;
};

// Combining the response of statistics,itemsPriceWithRange and categoryWiseItem

export const getCombinedResponse = async (req, res) => {
  const statisticsRes = await statistics(req, res);
  const itemsAndPriceRange = await itemsWithPriceRange(req, res);
  const categoryWiseItemCount = await categoryWiseItem(req, res);
  res.json({
    statistics: statisticsRes,
    barChatData: itemsAndPriceRange,
    categoryWiseItemCount,
  });
};
