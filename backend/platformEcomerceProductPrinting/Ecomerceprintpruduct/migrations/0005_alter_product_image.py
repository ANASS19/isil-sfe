# Generated by Django 4.0.4 on 2022-05-18 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0004_delete_user_product_brand_product_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/images/logotab3lia.png', null=True, upload_to='image/'),
        ),
    ]
