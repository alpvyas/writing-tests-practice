const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
      // Arrange
      const bodyPromise = getBodyFromRequest(fakeReq);

      // Act
      // This next line emits an event using
      // emit(event name, optional data)
      fakeReq.emit('end');

      // Assert
      bodyPromise
        .then(body => {
          // Write the following code:
          // Determine if body is equal to ""
          // If it is, call done()
          // If it is not, call
          //   done(`Failed. Got "${body}"`)

          if (expect(body).to.equal("")) {
            done();
          } else {
            done(`Failed. Got "${body}"`);
          }
        });

  });

  it('returns the data read from the stream', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    const data1 = "This is some";
    const data2 = " data from the browser";

    fakeReq.emit('data', data1);
    fakeReq.emit('data', data2);

    fakeReq.emit('end');

    bodyPromise
    .then(body => {

      if (expect(body).to.equal(data1 + data2)) {
        done();
      } else {
        done(`Failed. Got "${body}"`)
      }
    })

  });
});
