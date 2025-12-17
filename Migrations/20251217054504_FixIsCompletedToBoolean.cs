using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_react_todo.Migrations
{
    /// <inheritdoc />
    public partial class FixIsCompletedToBoolean : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            if (ActiveProvider == "Npgsql.EntityFrameworkCore.PostgreSQL")
            {
                migrationBuilder.Sql(@"
                    ALTER TABLE ""Todos""
                    ALTER COLUMN ""IsCompleted"" TYPE boolean
                    USING (CASE WHEN ""IsCompleted"" = 1 THEN TRUE ELSE FALSE END);
                ");
            }
            else if (ActiveProvider == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                // SQLiteは整数で運用でもOK（多くは触らない）
            }
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            if (ActiveProvider == "Npgsql.EntityFrameworkCore.PostgreSQL")
            {
                migrationBuilder.Sql(@"
                    ALTER TABLE ""Todos""
                    ALTER COLUMN ""IsCompleted"" TYPE integer
                    USING (CASE WHEN ""IsCompleted"" THEN 1 ELSE 0 END);
                ");
            }
        }
    }
}
