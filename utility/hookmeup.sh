#!/bin/bash

# Iterate up the directory structure until we find the root of the al_ui_template repo that we are being executed within
while [[ $PWD != '/' && ! ( -f "$PWD/package.json" && -f "$PWD/bower.json" && "$PWD/karma.conf.js" ) ]]; do
    if [[ -d .git && -f .git/aluitemplate-link ]]
    then
        cd $(<.git/aluitemplate-link)
    else
        cd ..
    fi
done

if [ $PWD = '/' ]
then
    echo "The root of the current al_ui_template repository could not be found: \033[1;31mABORTING\033[0m (make sure you run npm hookmeup)"
    echo "Evaluated from this path: $WHERE_AM_I"
    exit 1
fi

if [ ! -f package.json ]
then
    echo "The root of your al_ui_template repository does not actually appear to be an al_ui_template repository: \033[1;31mABORTING\033[0m"
    echo "Using al_ui_template root $PWD derived from origin path $WHERE_AM_I"
    exit 1
fi

echo "=================================================================="
echo "Installing git hooks to al_ui_template repository at \033[1;36m$PWD\033[0m..."
echo "=================================================================="

cp git-hooks/pre-push .git/hooks/
echo "al_ui_template.................. installed"
