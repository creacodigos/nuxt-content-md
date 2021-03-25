---
title: Chuletas sobre Terminal
description: Repositorio con tips y notas sobre el uso de Terminal que he ido recopilando y que me han salvado la vida en este oscuro mundo de la consola de comandos.
img: /img/terminal.jpg
alt: Chuletas sobre Terminal
author:
  name: Jorge Santana
  bio: Full Stack Developer & PizzaBurger Maker 🖥️ 🍕 🍔 🎸
  img: /img/jorge_santana.jpg
---
# Chuletas Terminal Unix - Macos

Listar archivos con permisos:

`ls -la`

Abrir carpeta

`cd carpeta`

Crear carpeta

`mkdir carpeta`

Borrar carpetas y todo su contenido

`rm -R carpeta/`

Cambiar permisos a carpetas y todo su contenido:

`chown -R user:user carpeta/`

Listar puertos en escucha:

`lsof -i -P | grep -i listen`

Reiniciar apache:

`sudo apachectl restart`

Cambiar archivos de apache:

Editar archivo host:

`nano /private/etc/hosts`

Conectar SSH:

`ssh -i <CLAVE_PRIVADA> <USER>@<URL_SERVER>`

## Apache

https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions
