const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле "name" Обязательно должно быть заполнено'],
    minlength: [2, 'Минимальная кол-во символов "name" - 2'],
    maxlength: [30, 'Максимальная кол-во символов "name" - 30'],
  },
  about: {
    type: String,
    required: [true, 'Поле "about" Обязательно должно быть заполнено'],
    minlength: [2, 'Минимальная кол-во символов "about" - 2'],
    maxlength: [30, 'Максимальная кол-во символов "about" - 30'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле "avatar" Обязательное'],
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
