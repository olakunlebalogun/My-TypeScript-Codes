enum Role {
	ROLE_USER,
	ROLE_ADMIN,
	ROLE_SYSADMIN,
}

// The default index is that of an array

let user: { name: string; role: Role };
user = { name: "Kolade", role: Role.ROLE_ADMIN };
console.log(user);

// Enum Index can be changed using numbers as default values

enum Rank {
	BEGINNER = 1,
	INTERMEDIATE = 2,
	PROFESSIONAL = 3,
	MASTER = 4,
}

// Enum Index can be changed using string as default values

enum Family {
	FATHER = "The of the family",
	MOTHER = " Neck of the family",
	CHILDREN = "The upcoming generation",
}

let sampleFam: {
	age: number;
	family: Family;
};

sampleFam = {
	age: 23,
	family: Family.FATHER,
};

console.log(sampleFam);
