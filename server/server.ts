import App from './app';
App.app.listen(5000, () => console.log('Agora vai!!!'));
process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));