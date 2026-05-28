export type Location = "Home" | "Park" | "Shop" | "Settings";

export type Item = {
  id: string;
  name: string;
  icon: string;
  price: number;
  effect: {
    hunger?: number;
    happiness?: number;
    energy?: number;
  };
};

export type Hamster = {
  id: number;
  name: string;
  breed: string;
  personality: string;
  hunger: number;
  energy: number;
  happiness: number;
  cleanliness: number;
  friendship: number;
  image: string;
};
