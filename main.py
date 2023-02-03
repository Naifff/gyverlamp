q = pins.i2c_read_number(0, NumberFormat.INT8_LE, False)
pins.i2c_write_number(0, 0, NumberFormat.INT8_LE, False)