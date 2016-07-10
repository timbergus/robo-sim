import request from 'superagent';

const URL = 'http://localhost:3000';

module.exports.turnOnLed = function () {
  return request
    .post(`${ URL }/led`)
    .send({
      index: 0,
      state: 'on'
    });
}

module.exports.turnOffLed = function () {
  return request
    .post(`${ URL }/led`)
    .send({
      index: 0,
      state: 'off'
    });
}
