const { Activities, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activities model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activities.sync({ force: true }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activities.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activities.create({ name: 'parachuting' });
      });
    });

    describe('dificulty', () => {
        it('should throw an error if dificulty is null', (done) => {
          Activities.create({})
            .then(() => done(new Error('It requires a valid dificulty')))
            .catch(() => done());
        });
        it('should work when its a valid dificulty', () => {
          Activities.create({ dificulty: 1 });
        });
      });

      describe('duration', () => {
        it('should throw an error if duration is null', (done) => {
          Activities.create({})
            .then(() => done(new Error('It requires a valid duration')))
            .catch(() => done());
        });
        it('should work when its a valid duration', () => {
          Activities.create({ duration: '1 hour' });
        });
      });

      describe('season', () => {
        it('should throw an error if season is null', (done) => {
          Activities.create({})
            .then(() => done(new Error('It requires a valid season')))
            .catch(() => done());
        });
        it('should work when its a valid season', () => {
          Activities.create({ season: 'winter' });
        });
      });
  });
});
