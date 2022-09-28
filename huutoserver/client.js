const express = require('express');
const io = require('socket.io');
const socket = io('http://localhost:3000');

socket.emit('vote');
