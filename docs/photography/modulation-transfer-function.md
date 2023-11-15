---
title: Modulation Transfer Function (MTF)
---
# Modulation Transfer Function (MTF)
* The MTF characterizes an optical system's ability to recreate contrast from a scene
* More precisely, the MTF describes a system's 
* Generally speaking, the MTF of imaging systems tends to decrease as spatial frequencies increase

![mtf-graph](../__assets/img/mtf-graph.png)

- MTFs are real-, positive-valued functions with a range [0,1]
## MTF Mathematics and Relationship to OTF
- Starting from the basics: an optical system has a characteristic function called its Point Spread Function (PSF). It is the optical system's response to a (spatial) impulse function AKA a point source (i.e. if we imaged a single point of light, what does our image look like?)
- What does the PSF have to do with imaging objects more complex than a point source? An output image is obtained by [convolving](mathematics/convolution.md) the input object with the system's PSF.
	- This assumes that the system is spatially invariant i.e. the same PSF is valid across the entire detector, lens, etc.
- The [Fourier Transform](mathematics/fourier-transform.md) of the PSF is known as the Optical Transfer Function (OTF)
- Where the PSF describes the optical system's response to an object in image space, the OTF describes its response in frequency space. They are two sides of the same coin.
	- Colloquially you might say the PSF describes how well the system recreates the actual "pixels" of an object, while the OTF describes how the system recreates the spatial frequency spectrum of the object
- Being a fourier transform, the OTF is a complex valued-function. **The magnitude of the complex OTF is precisely the MTF**, while the phase component is known as the phase transfer function.
- In a compound system, the total transfer function is the product of its components' transfer functions
---
# Resources
