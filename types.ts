type ID = number;

let userId: ID;
userId = 34;

type dynamicID = number | string;

let merchantId: dynamicID;

merchantId = 34;
merchantId = "Thirty Four";

type RECTANGLE = {
	length: number;
	height: number;
	color: string;
};

let myRoom: RECTANGLE = {
	length: 300,
	height: 400,
	color: "Columbus",
};
