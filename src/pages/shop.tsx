import PageHeader from "@/components/PageHeader";

const Shop = () => {
  return (
    <div className="container mx-auto">
      {/* <PageHeader heading="Shop" /> */}
      <div className="flex flex-row flex-wrap justify-center gap-6 pb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj) => {
          return (
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
