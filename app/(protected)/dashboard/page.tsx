
export default async function Dashboard() { 
    
    return (
        <main className="container mx-auto max-w-[800px]">
            <div id="orders-container">
                <strong>Dashboard</strong>
                <p>Recent orders from your store.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
    
                    </tbody>
                </table>
            </div>
        </main>
    );
}
