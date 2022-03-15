interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");

// doesn't work
usul.name = "Joe";

// ---------------------------
// ** readonly tuples **
function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
  return [x, y, z];
}

const c0 = makeCoordinate(1, 2, 3);

// doesn't work
c0[1] = 2;

const reallyConst = [1, 2, 3] as const;

// doesn't work
reallyConst[0] = 2;
