# Generated by Django 4.0.4 on 2022-05-20 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0011_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(choices=[('T-chirt', 'T-chirt'), ('Hodie', 'Hodie'), ('gacket', 'gacket')], null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ecomerceprintpruduct.category'),
        ),
    ]
