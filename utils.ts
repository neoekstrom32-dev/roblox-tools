type Vector3 = { x: number; y: number; z: number; }

type Color3 = { r: number; g: number; b: number; }

/**
 * Adds two Vector3 objects and returns their sum.
 *
 * @param v1 The first vector object.
 * @param v2 The second vector object.
 * @returns A new Vector3 representing the sum.
 */
function addVectors(v1: Vector3, v2: Vector3): Vector3 {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y,
        z: v1.z + v2.z,
    };
}

/**
 * Scales a Vector3 object by a scalar value.
 *
 * @param vector The vector object to scale.
 * @param scale The scalar to multiply the vector by.
 * @returns A new Vector3 representing the scaled vector.
 */
function scaleVector(vector: Vector3, scale: number): Vector3 {
    return {
        x: vector.x * scale,
        y: vector.y * scale,
        z: vector.z * scale,
    };
}

/**
 * Blends two Color3 objects based on a factor.
 *
 * @param color1 The first color object.
 * @param color2 The second color object.
 * @param factor The blending factor (0 to 1).
 * @returns A new Color3 representing the blended color.
 */
function blendColors(color1: Color3, color2: Color3, factor: number): Color3 {
    return {
        r: color1.r + (color2.r - color1.r) * factor,
        g: color1.g + (color2.g - color1.g) * factor,
        b: color1.b + (color2.b - color1.b) * factor,
    };
}