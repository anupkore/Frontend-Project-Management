function UsersTable()
{
    return(
        <>
            <div>
                <table className="table-fixed bg-white rounded-3xl w-auto mx-auto shadow-md">
                    <thead>
                        <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Contact</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Update</th>
                        <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    
                    <tbody className="mt-3">
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">Anup</td>
                        <td className="px-4 py-2">anup@infobellit.com</td>
                        <td className="px-4 py-2">8698995577</td>
                        <td className="px-4 py-2">Manager</td>
                        <td> <button className="btn btn-primary">Update</button> </td>
                        <td> <button className="btn btn-danger">Delete</button>  </td>
                    </tbody>
                    
                </table>

                </div>
        </>
    );
}

export default UsersTable;