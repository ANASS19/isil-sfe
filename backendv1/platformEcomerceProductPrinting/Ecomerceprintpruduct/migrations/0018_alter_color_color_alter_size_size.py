# Generated by Django 4.0.4 on 2022-05-20 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0017_alter_product_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='color',
            name='color',
            field=models.CharField(blank=True, choices=[(1, 'black'), (2, 'white')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='size',
            name='size',
            field=models.CharField(blank=True, choices=[(1, 'S'), (2, 'M'), (3, 'L'), (4, 'XL')], max_length=200, null=True),
        ),
    ]