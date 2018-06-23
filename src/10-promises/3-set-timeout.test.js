/**
 * Created by martin on 23/06/18.
 */
describe('Creating promises - timeout', function() {
  test('should understand resolve', function(done) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ name: 'Myamoto', age: 32 });
      }, 100);
    });

    promise.then(
      player => {
        expect(player).toEqual({ name: 'Myamoto', age: 32 });
        done();
      },
      () => {
        done.fail('This should not be executed');
      }
    );
  });

});
