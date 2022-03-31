// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // setTimeout(()=>{
      const tt =  [
          {
              title: "Adidas shoe, best in any outfits",
              image: "https://api.lorem.space/image/shoes?hash=8B7BCDC2",
              price: 5000,
          },
          {
              title: "Best cloth fashion",
              image: "https://api.lorem.space/image/fashion?hash=2B7BCDC3",
              price: 6500,
          },
          {
              title: "Nike shoe, best in any outfits",
              image: "https://api.lorem.space/image/shoes?hash=8B7BCDC3",
              price: 2500,
          },
          {
              title: "Smart watch",
              image: "https://api.lorem.space/image/watch?hash=8B4BCDC2",
              price: 1500,
          },
          {
              title: "Refreshment drink",
              image: "https://api.lorem.space/image/drink?hash=2B7BCDC2",
              price: 1000,
          },
          {
              title: "Pizza",
              image: "https://api.lorem.space/image/pizza?hash=2B7BCDC2",
              price: 3000,
          },
          {
              title: "Outfit",
              image: "https://api.lorem.space/image/fashion?hash=2B7BCDC2",
              price: 2000,
          }
      ]
    res.status(200).json(tt)
//   },10000)
}
