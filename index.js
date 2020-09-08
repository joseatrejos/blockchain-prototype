import PKG from './package.json';
import Block from './src/blockchain/block'

const { name, version, description, main, repository, author, license  } = PKG;
const { genesis } = Block;

// console.log( `${description} ${author}` );

const block = new Block(Date.now(), '8u8u1u8u', 'h4sh', 'd4t4');
console.log( block.toString() );

const block_2 = new Block(Date.now(), genesis.hash, 'h4sh2', 'transaccion1');
console.log(block_2.toString());