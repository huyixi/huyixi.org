cd ~/i/huyixi.org/
# Ask user for content type
echo "Enter content type (e.g., Weekly(W), Post(P), Project(Proj)):"
read content_type

# Ask user for the title or filename
echo "Enter the title or filename:"
read title

# Determine content path and archetype based on user input

case $content_type in
    weekly)
    	content_path="journal/$title.md"
	    archetype_name="weekly"
	;;
    w)
    	content_path="journal/$title.md"
        archetype_name="weekly"
    ;;
    project)
        content_path="project/$title.md"
        archetype_name="project"
        ;;
    proj)
        content_path="project/$title.md"
        archetype_name="project"
        ;;
    post)
        content_path="posts/$title.md"
        archetype_name="post"
        ;;
    p)
        content_path="posts/$title.md"
        archetype_name="post"
        ;;
    *)
        archetype_name="$content_type"
        content_path="$content_type/$title.md"
        ;;
esac

# Print out the paths for debugging
echo "Using archetype: $archetype_name"
echo "Creating content at: $content_path"

# Create content using Hugo and the specified archetype
hugo new content --kind $archetype_name $content_path

echo "Content created successfully!"

open -a "Typora" "content/$content_path"
