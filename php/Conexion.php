<?php

namespace ASC;

/* Factoría singleton para conexiones PDO */
class Conexion
{
    private static $configuracion = [
        'dsn'      => 'mysql:host=localhost;dbname=asc;charset=utf8',
        'usuario'  => 'root',
        'clave'    => '',
        'opciones' => [
        ],
    ];
    private static $conexion = false;

    public static function obtenerPDO()
    {
        if (is_readable(__DIR__.'/configuracion.json')) {
            $configuracion = json_decode(__DIR__.'/configuracion.json', true);
            if ($configuracion !== false) {
                self::$configuracion = array_merge(
                    self::$configuracion,
                    $configuracion
                );
            }
        }
        if (self::$conexion === false) {
            self::$conexion = new \PDO(
                self::$configuracion['dsn'],
                self::$configuracion['usuario'],
                self::$configuracion['clave'],
                self::$configuracion['opciones']
            );
            self::$conexion->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        }

        return self::$conexion;
    }
}
