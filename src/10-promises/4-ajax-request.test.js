/**
 * Created by martin on 23/06/18.
 */
describe('Creating promises - timeout', function() {
  test('should understand resolve', function(done) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ id: 1, name: 'Myamoto', age: 32 });
      }, 100);
    });

    promise.then(
      player => {
        expect(player).toEqual({ id: 1, name: 'Myamoto', age: 32 });
        done();
      },
      () => {
        done.fail('This should not be executed');
      }
    );
  });

  test('should understand chaining', function() {

    var leaders = [{ id: 4, name: 'Myamoto', age: 32 }, { id: 6, name: 'blabla', age: 42 }];

    var leaderboardPromise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(leaders) ;
      }, 100);
    });

    var playerPromise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(leaders[0]);
      }, 100);
    });

    return leaderboardPromise.then(leaders => playerPromise).then(player => expect(player).toEqual({ id: 4, name: 'Myamoto', age: 32 }));

  });

  test('should understand all promises', function(done) {

    var promise1 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ id: 1, name: 'Myamoto', age: 32 });
      }, 100);
    });

    var promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ id: 2, name: 'blabla', age: 42 });
      }, 100);
    });

    return Promise.all([promise1, promise2]).then(result => {
      expect(result).toEqual([{ id: 1, name: 'Myamoto', age: 32 }, { id: 2, name: 'blabla', age: 42 }]);
      done();
    });
  });

});
