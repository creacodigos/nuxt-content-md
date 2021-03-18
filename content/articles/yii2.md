---
title: Yii 2
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
author:
  name: Jorge Santana
  bio: Full Stack Developer & PizzaBurger Maker 🖥️ 🍕 🍔 🎸
  img: https://avatars.githubusercontent.com/u/50615503?s=400&u=d6ef3d6548024516b1ca246386958bf32843607c&v=4
---
# Yii 2

## Migrate:

Creación:
```
./yii migrate/create create_news_table
```
Regenerar todos los migrate:
```
./yii migrate/fresh
```
Log del sistema:
```
Yii::error('PARAMS => '.ApiFunctions::objectString($params));
Yii::warning('PARAMS => '.ApiFunctions::objectString($params));
```

Url Base del sistema:

`Yii::app()->getBaseUrl(true)`

## find():

```php
// Añade where tipo OR
$operations = Operation::find()->andwhere(['or',['buyer_id' => $bodyParams['user_id']],['seller_id' => $bodyParams['user_id']]])->all();

// Devuelve la petición como array sin ser objeto active redord:
$mp_oper = MangoPayOperation::find()->andwhere(['operation_id' => $value->id])->asArray()->one();
// Permite añadir parámetros extras
$mp_oper['type'] = $value->seller_id == $bodyParams['user_id'] ? 'SELL' : 'BUY';

// Almacenar los atributos de un modelo como array
$mp_oper = MangoPayOperation::find()->andwhere(['operation_id' => $value->id])->one();
$mp_oper_array = $mp_oper->attributes;
```

## Query

Ejecutando función Mysql directamente. En este caso haciendo uso de leftJoin

```php
 $rows_query (new \yii\db\Query())
            ->select('tc_client_tokenized.id, tc_client_tokenized.user_id, tc_client_tokenized.landing_page_url, tc_client_tokenized.active, tc_client_tokenized_asset.ts_asset_id')
            ->from('tc_client_tokenized')
            ->leftJoin('tc_client_tokenized_asset', '`tc_client_tokenized`.`id` = `tc_client_tokenized_asset`.`client_tokenized_id`')
            ->where(['tc_client_tokenized.user_id' => $this->id])
            ->all();
```