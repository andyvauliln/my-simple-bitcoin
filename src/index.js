const store = require('./store');
const { makeBlock, mineBlock } = require('./util/block');
const app = require('./server');
const co = require('co');


co(function* () {
    while (true) {
        store.addBlock(yield mineBlock(store.mempool, store.lastBlock(), store.difficulty));
    }

});