exports.findUser = function(data, cb) {
  User.findOne({
    username: data.usr
  }, function(err, doc) {
    // 用户密码都正确
    // jwt.encode({加密对象, 持续时间}, 密钥字符串)
    entries.data = user
    entries.code = 0
    var time = moment().add(1, 'days').valueOf()
    entries.access_token = jwt.encode({
      iss: user._id,
      exp: time
    }, jwtTokenSecret)
    cb(true, entries)
  })
}
