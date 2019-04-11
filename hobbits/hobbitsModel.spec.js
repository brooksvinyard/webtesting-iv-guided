const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js')

describe("hobbits model", () => {
    // This function will clear out the table each time we run tests
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    describe("insert()", () => {
      it("should insert the provided hobbits", async () => {
        await Hobbits.insert({ name: 'gaffer' });
        await Hobbits.insert({ name: 'aragorn' });
        await Hobbits.insert({ name: 'gandolf' });

        const hobbits = await db('hobbits');
        expect(hobbits).toHaveLength(3);
      });

      it("should insert the provided hobbit", async () => {
        let hobbit = await Hobbits.insert({ name: 'gaffer' });
        expect(hobbit.name).toBe('gaffer');

        hobbit = await Hobbits.insert({ name: 'sam' });
        expect(hobbit.name).toBe('sam');
      });

    });
  });
  