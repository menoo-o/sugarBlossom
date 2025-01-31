    // Function to format the collection name
    const formatCollectionName = (name: string) => {
        // Step 1: Replace hyphens with spaces
        const nameWithSpaces = name.split('-').join(' ');
    
        // Step 2: Capitalize each word
        const capitalizedName = nameWithSpaces
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
        return capitalizedName;
    };


export default formatCollectionName