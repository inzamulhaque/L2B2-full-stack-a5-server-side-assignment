import Bike from "./bike.model";

const getBikesWithQuery = async (query: Record<string, unknown>) => {
  try {
    const querySrt = query?.search;

    // const name = query?.name;
    // const price = query?.price;
    // const releaseDate = query?.releaseDate;
    // const brand = query?.brand;
    // const model = query?.model;
    // const color = query?.color;
    // const mileage = query?.mileage;
    // const insurance = query?.insurance;

    // let data = Bike.find({ isDeleted: false });

    // if (name) {
    //   data = data.find({ name });
    // }

    // if (price) {
    //   data = data.find({ price });
    // }

    // if (releaseDate) {
    //   data = data.find({ releaseDate });
    // }

    // if (brand) {
    //   data = data.find({ brand });
    // }

    // if (model) {
    //   data = data.find({ model });
    // }

    // if (color) {
    //   data = data.find({ color });
    // }

    // if (mileage) {
    //   data = data.find({ mileage });
    // }

    // if (insurance) {
    //   data = data.find({ insurance: { provided: true } });
    // }

    // const result = await data.find();

    if (querySrt) {
      let searchArr;

      if (!isNaN(Number(querySrt))) {
        searchArr = [
          { name: querySrt },
          { price: Number(querySrt) },
          { releaseDate: querySrt },
          { brand: querySrt },
          { color: querySrt },
          { mileage: Number(querySrt) },
        ];
      } else {
        searchArr = [
          { name: querySrt },
          { releaseDate: querySrt },
          { brand: querySrt },
          { color: querySrt },
        ];
      }
      const result = await Bike.find({
        $or: searchArr,
      });

      return result;
    } else {
      const result = await Bike.find();

      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getBikesWithQuery };
