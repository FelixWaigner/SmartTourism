import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"


export default function BusinessData() {

    var data = [
        // Report Pending
        { Capacity: 21, Status: "Report Pending", Name: "Riverside Inn", Report: "2024-01-14", Visitors: 110 },
        { Capacity: 124, Status: "Report Pending", Name: "Golden Cafe", Report: "2024-01-04", Visitors: 224 },
        { Capacity: 220, Status: "Report Pending", Name: "Sunny Gallery", Report: "2024-01-11", Visitors: 146 },
        { Capacity: 146, Status: "Report Pending", Name: "Harbor View Museum", Report: "2024-01-13", Visitors: 31 },
        { Capacity: 157, Status: "Report Pending", Name: "Red Rock Inn", Report: "2024-01-11", Visitors: 13 },
        { Capacity: 158, Status: "Report Pending", Name: "Red Rock Inn", Report: "2024-01-09", Visitors: 213 },
        { Capacity: 265, Status: "Report Pending", Name: "Mountain View Gardens", Report: "2024-01-01", Visitors: 73 },
    
        // Report Approved
        { Capacity: 101, Status: "Report Approved", Name: "Riverside Park", Report: "2024-01-08", Visitors: 103 },
        { Capacity: 16, Status: "Report Approved", Name: "Harbor View Bistro", Report: "2024-01-05", Visitors: 213 },
        { Capacity: 104, Status: "Report Approved", Name: "Sunny Restaurant", Report: "2024-01-11", Visitors: 65 },
        { Capacity: 155, Status: "Report Approved", Name: "Red Rock Restaurant", Report: "2024-01-08", Visitors: 126 },
        { Capacity: 204, Status: "Report Approved", Name: "Riverside Inn", Report: "2024-01-10", Visitors: 75 },
        { Capacity: 295, Status: "Report Approved", Name: "Blue Ocean Lodge", Report: "2024-01-08", Visitors: 60 },
        { Capacity: 151, Status: "Report Approved", Name: "Silver Lake Museum", Report: "2024-01-08", Visitors: 211 },
        { Capacity: 270, Status: "Report Approved", Name: "Mountain View Museum", Report: "2024-01-13", Visitors: 119 },
        { Capacity: 172, Status: "Report Approved", Name: "Riverside Bistro", Report: "2024-01-08", Visitors: 42 },
        { Capacity: 89, Status: "Report Approved", Name: "Green Valley Restaurant", Report: "2024-01-05", Visitors: 161 },
        { Capacity: 271, Status: "Report Approved", Name: "Mountain View Park", Report: "2024-01-08", Visitors: 54 },
        { Capacity: 37, Status: "Report Approved", Name: "Silver Lake Museum", Report: "2024-01-04", Visitors: 65 },
        { Capacity: 283, Status: "Report Approved", Name: "Seaside Resort", Report: "2024-01-15", Visitors: 31 }
    ];
    
    return(
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex min-h-[calc(100vh-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <h1 className="font-semibold text-3xl">Business Dashboard</h1>
                <div className="border shadow-sm rounded-lg">
                <Table>
                        <TableHeader>
                            <TableRow className="bg-white">
                                <TableHead>Name</TableHead>
                                <TableHead>Report</TableHead>
                                <TableHead>Capacity</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Visitors</TableHead>
                                <TableHead>Action</TableHead> {/* New Header for Button */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((dat, index) => (
                                <TableRow key={index}> {/* Key changed to index for uniqueness */}
                                    <TableCell className="font-medium">{dat.Name}</TableCell>
                                    <TableCell>{dat.Report}</TableCell>
                                    <TableCell>{dat.Capacity}</TableCell>
                                    <TableCell>{dat.Visitors}</TableCell>
                                    <TableCell 
                                        style={{ 
                                            color: dat.Status === "Report Pending" ? 'orange' : 'green' 
                                        }}
                                    >
                                        {dat.Status}
                                    </TableCell>
                                    <TableCell>
                                        <button className="btn" style={{ color: 'blue' }}>Show business &gt;</button> {/* New Button */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}