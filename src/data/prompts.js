const prompts = [
  // --- IMAGE PROMPTS ---
  {
    id: 1,
    type: "image",
    title: "Cinematic Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    description: "Create a realistic cinematic portrait with dramatic lighting.",
    prompt: "A highly detailed cinematic portrait of a young man standing in a dark urban environment at night, dramatic cinematic lighting, soft rim light, realistic skin texture, shallow depth of field, professional photography, 85mm lens, natural facial details, moody atmosphere, ultra realistic, 4K."
  },
  {
    id: 2,
    type: "image",
    title: "Luxury Car Scene",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
    description: "Generate a cinematic luxury car scene.",
    prompt: "A cinematic photograph of a luxury sports car parked on a modern city street at night, wet reflective road, neon lights, dramatic shadows, realistic reflections, atmospheric fog, professional automotive photography, ultra detailed, photorealistic, cinematic composition, 4K."
  },
  {
    id: 3,
    type: "image",
    title: "Fantasy Landscape",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    description: "Create an epic fantasy environment.",
    prompt: "An enormous fantasy mountain landscape with floating islands, waterfalls flowing through the clouds, ancient temples, glowing magical atmosphere, dramatic sunrise, volumetric lighting, highly detailed environment, cinematic composition, epic scale, photorealistic fantasy art, 4K."
  },
  {
    id: 7,
    type: "image",
    title: "Cyberpunk Alleyway",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    description: "Futuristic neon-lit street in a sci-fi city.",
    prompt: "A narrow futuristic alleyway in Tokyo at night, glowing neon signs in Japanese Kanji, rain-slicked pavement with vibrant reflections, steam rising from street vents, high detail cyberpunk aesthetic, unreal engine 5 render, octave render, highly cinematic, 8K resolution."
  },
  {
    id: 8,
    type: "image",
    title: "Astronaut on Alien Planet",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    description: "Deep space exploration on a glowing surreal world.",
    prompt: "A lonely astronaut standing on the surface of a distant alien planet, glowing bioluminescent flora, two giant moons in the cosmic starry sky, highly reflective visor reflecting the alien landscape, cinematic lighting, dramatic atmospheric depth, sci-fi concept art, photorealistic, 4K."
  },
  {
    id: 9,
    type: "image",
    title: "3D Isometric Cyber Room",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    description: "Cute and detailed 3D miniature room setup.",
    prompt: "3D isometric view of a cozy developer setup room at night, glowing dual monitors, neon LED strips, mechanical keyboard, plants on shelves, miniature aesthetic, soft pastel ambient lighting, blender 3D render, octane render, clean textures, smooth lighting, ultra-detailed."
  },

  // --- VIDEO PROMPTS ---
  {
    id: 4,
    type: "video",
    title: "Cinematic City",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    description: "Create a cinematic night city video.",
    prompt: "A cinematic nighttime shot of a futuristic city filled with glowing neon signs, flying vehicles moving between skyscrapers, light rain falling, reflections on wet streets, slow camera movement through the city, atmospheric fog, realistic lighting, cinematic depth, smooth motion, high detail."
  },
  {
    id: 5,
    type: "video",
    title: "Ocean Waves",
    image: "https://images.unsplash.com/photo-1510711789248-087061cda288?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1510711789248-087061cda288?q=80&w=600&auto=format&fit=crop",
    description: "Generate a realistic cinematic ocean scene.",
    prompt: "A cinematic aerial video of powerful ocean waves crashing against a rocky coastline during golden hour, warm sunlight reflecting across the water, realistic wave movement, sea mist, smooth drone camera movement, natural lighting, detailed water simulation, cinematic atmosphere, ultra realistic."
  },
  {
    id: 6,
    type: "video",
    title: "Color Mixing ASMR",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop",
    description: "Create a satisfying colorful mixing video.",
    prompt: "A macro cinematic ASMR video showing vibrant liquid colors slowly mixing together inside a transparent glass container, smooth swirling motion, glossy reflections, soft studio lighting, extremely detailed liquid textures, satisfying movement, clean background, slow motion, realistic physics, 4K macro photography."
  },
  {
    id: 10,
    type: "video",
    title: "Time-Lapse Milky Way",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop",
    description: "Breathtaking starry sky time-lapse over mountains.",
    prompt: "A slow time-lapse video of the Milky Way galaxy moving across a dark starry sky above majestic snowy mountains, subtle shooting stars, glowing galactic core, smooth camera pan, ultra high-definition cosmic video, atmospheric depth, realistic motion blur."
  },
  {
    id: 11,
    type: "video",
    title: "Macro Coffee Pouring",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    description: "Slow-motion espresso commercial video shot.",
    prompt: "A slow-motion macro cinematic video of steaming rich espresso pouring gracefully into a clear glass cup, creamy golden cremma forming on top, soft warm morning lighting, subtle steam rising, shallow depth of field, commercial quality video, 120fps, highly detailed."
  },
  {
    id: 12,
    type: "video",
    title: "Cyberpunk Hover Car",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    description: "Futuristic vehicle cruising through rainy city.",
    prompt: "Cinematic dynamic camera shot tracking behind a glowing hover car cruising high above a rainy cyberpunk metropolis at night, neon reflections on wet metallic surfaces, thruster glow effects, smooth camera stabilization, 60fps, photorealistic sci-fi video."
  }
];

export default prompts;