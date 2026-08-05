---
title: "TPC 2021 Talk // Pipeline Outside M&E: Airbus and the Data-Driven Pipeline"
date: 2021-07-25T23:35:58
author: "Satish Goda"
tags: ["TPC2021"]
---

> Deep learning requires the use of a huge amount of training data to develop and test a successful neural network model that generalizes well. Several public datasets are already available for different kinds of object recognition and autonomous cars, but none exist for aeronautic applications. We present a data-driven pipeline for the creation of synthetic imagery and the acquisition of real imagery and data for the development of autonomous flying vehicles.
>
> July 28th 10:40 - 11:20 PDT

![](/uploads/2021/05/Anastasio-Garcia-edit.jpg)

**Anastasio Garcia**  
*Head of Simulatio*n  
Acubed

![](/uploads/2021/05/Harvest-Zhang-edit.jpg)

**Harvest Zhang**  
*Head of Perception*  
Acubed

![](/uploads/2021/07/0ffb304913081d09ca9b020229a2dd66.png)

**Alexis Casas**   
*(Moderator*)

## 1st. Presenter: Anastascio Garcia

> Summarize the Airbus pipeline and what makes it different compared to a VFX pipeline and let the audience know what key points will be discussed in the presentations, first by your's truly, then by Harvest.

**The Data-driven pipeline vs synthetic**  
Data is the king. We need large amounts of *quality* data — for our supervised learning techniques, we need both the raw data itself and accurate ground truth labels (implicit in simulation, a significant challenge for real data).  
* Comparison to VFX pipeline.  
* We don’t have an army of 3D artists. Scalability considerations.  
* Large-scale, outdoor scenarios (need automatic solutions)  
* VFX's final product is a movie (i.e. many frames). We use many frames (not necessarily consecutive frames) to produce a neural network model.  
* No offline rendering (yet)  
* Hybrid pipeline: synthetic and real imagery are currently independent of each other (i.e no compositing of synthetic over real, but that could be a future use case)  
  
**Simulation**  
* Reference frames (real world and virtual world)  
* GPU-based rendering engine (OpenGL / Vulkan). XPlane, Unreal Engine  
* Flight dynamics model (i.e. physics engine)  
* Environmental conditions: weather, time of the day  
* Automatic labeling of relevant features. CGI to provide ground-truth labels  
* Failure case: procedural city creation with Houdini

## 2nd. Presenter: Harvest Zhang

**Real data**  
* On-board Wayfinder Laboratory: aircraft instrumented with an array of sensors  
* Camera calibration  
* Data labeling pipeline: from the aircraft to the data center, from raw sensor data to labeled ground truth for NNs to consume  
  
**What does the future hold for the Airbus pipeline?**

What are some of the changes that will happen and what are some of the things that we want to do?

---

![](/uploads/2021/07/virtual-BG-version1-TPC-2021-white-text-1024x576.png)
