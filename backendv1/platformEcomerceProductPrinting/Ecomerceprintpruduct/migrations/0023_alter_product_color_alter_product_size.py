# Generated by Django 4.0.4 on 2022-05-20 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0022_alter_product_color_alter_product_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='color',
            field=models.ForeignKey(blank=True, choices=[('black', 'black'), ('white', 'white')], max_length=50, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ecomerceprintpruduct.color'),
        ),
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.ForeignKey(blank=True, choices=[('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL')], max_length=50, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ecomerceprintpruduct.size'),
        ),
    ]
