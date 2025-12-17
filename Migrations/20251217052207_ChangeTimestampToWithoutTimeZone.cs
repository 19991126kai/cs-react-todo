using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_react_todo.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTimestampToWithoutTimeZone : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""UpdatedAt"" TYPE timestamp without time zone
                USING (""UpdatedAt""::timestamptz)::timestamp;
            ");

            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""Deadline"" TYPE timestamp without time zone
                USING (""Deadline""::timestamptz)::timestamp;
            ");

            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""CreatedAt"" TYPE timestamp without time zone
                USING (""CreatedAt""::timestamptz)::timestamp;
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""UpdatedAt"" TYPE TEXT
                USING ""UpdatedAt""::text;
            ");

            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""Deadline"" TYPE TEXT
                USING ""Deadline""::text;
            ");

            migrationBuilder.Sql(@"
                ALTER TABLE ""Todos""
                ALTER COLUMN ""CreatedAt"" TYPE TEXT
                USING ""CreatedAt""::text;
            ");
        }
    }
}
