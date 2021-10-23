@servers(['qlip' => 'drewhyte@157.245.16.19'])

@setup
$path = '/var/www/qlip/';
$pm2Id = '0';
@endsetup

@story('deploy', ['on'  => 'qlip'])
git:pull
npm:build
pm2:reload
@endstory

@task('npm:build')
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd {{ $path }}
npm install
npm run build
@endtask

@task('pm2:reload')
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd {{ $path }}
pm2 reload {{ $pm2Id }}
@endtask

@task('laravel:deploy')
cd {{ $path }}
composer install
php artisan migrate --force
@endtask

@task('git:pull')
cd {{ $path }}
git pull
@endtask
