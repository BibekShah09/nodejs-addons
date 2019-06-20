{
    "targets": [
        {
            "target_name": "sort",
            "sources": ["src/sort.cc"],
            "include_dirs": [
              "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
