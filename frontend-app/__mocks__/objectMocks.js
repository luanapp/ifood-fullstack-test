const startDate = '2018-11-10';
const endDate = '2018-12-31';
const name = "Name 1";
const phone = "Phone";
const email = "Email";
const description = "Description 1";
const quantity = 2;
const price = 21.2;
const item = {
    description,
    quantity,
    price,
};
const order = {
    name,
    phone,
    email,
    items: [item],
};

export const orders = [order];
export const items = order.items;
export const error = new Error("Error message");
export const searchParams = {
    startDate: (new Date(startDate)).toISOString(),
    endDate: (new Date(endDate)).toISOString(),
    name,
    phone,
    email,
};