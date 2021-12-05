import React from 'react'

export default function Pagination() {
    return (
        <div>
            <ul class="pagination  justify-content-center mt-4">
                <li class="page-item "><a class="page-link bg-dark text-white " href="/previous">Previous</a></li>
                <li class="page-item "><a class="page-link text-dark" href="/1">1</a></li>
                <li class="page-item"><a class="page-link text-dark" href="/2">2</a></li>
                <li class="page-item"><a class="page-link text-dark" href="/3">3</a></li>
                <li class="page-item"><a class="page-link bg-dark text-white" href="/Next">Next</a></li>
            </ul>
        </div>
    )
}
