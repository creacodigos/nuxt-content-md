---
title: Chuletas sobre Php
description: Repositorio con tips y notas sobre PHP que he ido recopilando.
img: /img/php.jpg
alt: Chuletas sobre Php
author:
  name: Jorge Santana
  bio: Full Stack Developer & PizzaBurger Maker 🖥️ 🍕 🍔 🎸
  img: /img/jorge_santana.jpg
---
# PHP

## Búsquedas:

Búsqueda entre varios valores con array_search()
```php
$status = 'FINISHED';
$result = array_search($status,array('FINISHED','CANCELLED','PENDING_PAYOUT','PENDING_REVIEW')) !== false ? true : false;
$result; // true es int(0)

$status = 'CREATED';
$result = array_search($status,array('FINISHED','CANCELLED','PENDING_PAYOUT','PENDING_REVIEW')) !== false ? true : false;
$result; // false es bool(false)
```

Buscar posición en array de objetos por valor de parámetro:

```php
$json = '[{"id":"1","texto":"uno"},{"id":"2","texto":"dos"},{"id":"3","texto":"tres"}]';
$json_decode = json_decode($json);

function buscarPosicionEnArray($array, $enParametro, $buscar, $strict = false){
    
    //$posicion = array_search($buscar, array_column($array, $enParametro, $strict)); // En algunos casos da error con $strict
    $posicion = array_search($buscar, array_column($array, $enParametro));
    if($posicion !== false && is_numeric($posicion))
        return $posicion;
    else
        return false;
        
}

var_dump(buscarPosicionEnArray($json_decode,'texto','dos'));
```