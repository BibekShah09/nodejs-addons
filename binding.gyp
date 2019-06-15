{
    "targets": [
        {
            "target_name": "sort",
            "sources": ["sort.cc"],
            "include_dirs": [
              "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
